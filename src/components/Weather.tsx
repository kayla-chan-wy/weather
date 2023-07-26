import React from "react";
import { Box, Flex, HStack, Icon, Select, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { locations } from "../data/locations";
import { FaEye, FaSun, FaTachometerAlt, FaTemperatureHigh, FaWater, FaWind } from 'react-icons/fa';
import { weatherCodes } from "../data/weather_code_mapping";

type weather = {
    current: {
        [key: string]: any;
    };
    location: {
        [key: string]: any;
    };
};

type Location = {
    city: string;
    country: string;
    continent: string;
};

const locationsGroupByContinent = locations.reduce((group: { [key: string]: Location[] }, location) => {
    const { continent } = location;
    group[continent] = group[continent] ?? [];
    group[continent].push(location);
    return group;
}, {});

export default function Weather() {
    const [location, setLocation] = React.useState<string>("London");
    const [weather, setWeather] = React.useState<weather>();
    const [timesOfDay, setTimesOfDay] = React.useState<string>("day");
    const weatherDataLibrary = React.useRef<{ [key: string]: weather }>({});

    React.useEffect(() => {
        fetchCurrentWeather(location);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchCurrentWeather = async (location: string) => {
        if (weatherDataLibrary.current[location]) {
            return weatherDataLibrary.current[location];
        }

        // TODO: find a better way to store API keys
        const API_KEY = "0d2d015c63674608af1154716232007";
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
        if (response.status >= 400 && response.status < 600) {
            console.error('error')
        }

        const data = await response.json();
        setWeather(data);

        // Not to best way to determine isDayTime
        const hours = new Date(data.location.localtime).getHours();
        setTimesOfDay(hours > 6 && hours < 19 ? 'day' : 'night');
    };

    const handleLocationChange = (location: string) => {
        setLocation(location);
        fetchCurrentWeather(location);
    };

    return (
        <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'} layerStyle='cardBase'>
            <HStack layerStyle={'card'} spacing={0}>
                <Box layerStyle={'cardLeft'} backgroundImage={`url(/weather/images/${weatherCodes[weather?.current.condition.code as keyof typeof weatherCodes]?.image[timesOfDay]}.jpg)`}></Box>
                <Box layerStyle={'cardRight'}>
                    <VStack spacing={'50px'}>
                        <Select color={'black'} value={location} onChange={(event) => handleLocationChange(event.target.value)}>
                            {Object.entries(locationsGroupByContinent).map(([continent, locations]) => (
                                <React.Fragment key={continent}>
                                    <option key={continent} value={continent} disabled>{continent}</option>
                                    {locations.map(({ city, country }) => (
                                        <option key={city} value={city}>{city}, {country}</option>
                                    ))}
                                </React.Fragment>
                            ))}
                        </Select>
                        <HStack spacing={'30px'}>
                            <Icon
                                as={weatherCodes[weather?.current.condition.code as keyof typeof weatherCodes]?.icon[timesOfDay]}
                                fontSize={'88px'}
                                color={'#2a3547'}
                            />
                            <Box>
                                <Text textStyle='temperature'>
                                    {weather?.current.temp_c}°
                                </Text>
                                <Text textStyle='condition'>
                                    {weather?.current.condition.text}
                                </Text>
                            </Box>
                        </HStack>
                        <SimpleGrid columns={3} spacing={10}>
                            <Box>
                                <HStack textStyle='label' spacing={'5px'}>
                                    <Icon as={FaTemperatureHigh} boxSize={3} />
                                    <Text>FEELS LIKE</Text>
                                </HStack>
                                <Text textStyle='data'>{weather?.current.feelslike_c}°</Text>
                            </Box>
                            <Box>
                                <HStack textStyle='label' spacing={'5px'}>
                                    <Icon as={FaWater} boxSize={3} />
                                    <Text>HUMIDITY</Text>
                                </HStack>
                                <Text textStyle='data'>{weather?.current.humidity}</Text>
                            </Box>
                            <Box>
                                <HStack textStyle='label' spacing={'5px'}>
                                    <Icon as={FaWind} boxSize={3} />
                                    <Text>WIND</Text>
                                </HStack>
                                <Text textStyle='data'>{weather?.current.wind_mph} mph</Text>
                            </Box>
                            <Box>
                                <HStack textStyle='label' spacing={'5px'}>
                                    <Icon as={FaSun} boxSize={3} />
                                    <Text>UV INDEX</Text>
                                </HStack>
                                <Text textStyle='data'>{weather?.current.uv}</Text>
                            </Box>
                            <Box>
                                <HStack textStyle='label' spacing={'5px'}>
                                    <Icon as={FaEye} boxSize={3} />
                                    <Text>VISIBILITY</Text>
                                </HStack>
                                <Text textStyle='data'>{weather?.current.vis_km} km</Text>
                            </Box>
                            <Box>
                                <HStack textStyle='label' spacing={'5px'}>
                                    <Icon as={FaTachometerAlt} boxSize={3} />
                                    <Text>PRESSURE</Text>
                                </HStack>
                                <Text textStyle='data'>{weather?.current.pressure_mb} hPa</Text>
                            </Box>
                        </SimpleGrid>
                    </VStack>
                </Box>
            </HStack>
        </Flex>
    );
}