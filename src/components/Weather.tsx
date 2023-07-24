import React from "react";
import { Box, Flex, HStack, Select, Text, VStack } from "@chakra-ui/react";

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

export default function Weather() {
    const [location, setLocation] = React.useState<string>("New York City");
    const [weather, setWeather] = React.useState<weather>();
    const weatherDataLibrary = React.useRef<{ [key: string]: weather }>({});

    const locations = [
        {
            city: "Bangkok",
            country: "Thailand",
            continent: "Asia",
        },
        {
            city: "Dubai",
            country: "the United Arab Emirates",
            continent: "Asia",
        },
        {
            city: "Mumbai",
            country: "India",
            continent: "Asia",
        },
        {
            city: "Seoul",
            country: "South Korea",
            continent: "Asia",
        },
        {
            city: "Tokyo",
            country: "Japan",
            continent: "Asia",
        },
        {
            city: "Amsterdam",
            country: "Netherlands",
            continent: "Europe",
        },
        {
            city: "Barcelona",
            country: "Spain",
            continent: "Europe",
        },
        {
            city: "London",
            country: "England",
            continent: "Europe",
        },
        {
            city: "Paris",
            country: "France",
            continent: "Europe",
        },
        {
            city: "Reykjavík",
            country: "Iceland",
            continent: "Europe",
        },
        {
            city: "Accra",
            country: "Ghana",
            continent: "Africa",
        },
        {
            city: "Cairo",
            country: "Egypt",
            continent: "Africa",
        },
        {
            city: "Cape Town",
            country: "South Africa",
            continent: "Africa",
        },
        {
            city: "Lagos",
            country: "Nigeria",
            continent: "Africa",
        },
        {
            city: "Nairobi",
            country: "Kenya",
            continent: "Africa",
        },
        {
            city: "Chicago",
            country: "the United States",
            continent: "North America",
        },
        {
            city: "Los Angeles",
            country: "the United States",
            continent: "North America",
        },
        {
            city: "New York City",
            country: "the United States",
            continent: "North America",
        },
        {
            city: "Toronto",
            country: "Canada",
            continent: "North America",
        },
        {
            city: "Vancouver",
            country: "Canada",
            continent: "North America",
        },
        {
            city: "Buenos Aires",
            country: "Argentina",
            continent: "South America",
        },
        {
            city: "Cartagena",
            country: "Colombia",
            continent: "South America",
        },
        {
            city: "Lima",
            country: "Peru",
            continent: "South America",
        },
        {
            city: "Rio de Janeiro",
            country: "Brazil",
            continent: "South America",
        },
        {
            city: "Santiago",
            country: "Chile",
            continent: "South America",
        },
        {
            city: "Auckland",
            country: "New Zealand",
            continent: "Oceania",
        },
        {
            city: "Brisbane",
            country: "Queensland",
            continent: "Oceania",
        },
        {
            city: "Melbourne",
            country: "Australia",
            continent: "Oceania",
        },
        {
            city: "Sydney",
            country: "Australia",
            continent: "Oceania",
        },
        {
            city: "Wellington",
            country: "New Zealand",
            continent: "Oceania",
        },
    ];

    const locationsGroupByContinent = locations.reduce((group: { [key: string]: Location[] }, location) => {
        const { continent } = location;
        group[continent] = group[continent] ?? [];
        group[continent].push(location);
        return group;
    }, {});

    // console.log('locationsGroupByContinent', locationsGroupByContinent)

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
        const data = await response.json();

        setWeather(data);
        weatherDataLibrary.current[location] = data;
    };

    const handleLocationChange = (location: string) => {
        setLocation(location);
        fetchCurrentWeather(location);
    };

    const locationWeather = weatherDataLibrary.current[location]?.current;
    console.log('locationWeather', locationWeather)

    return (
        <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'} layerStyle='cardBase'>
            <HStack layerStyle={'card'} spacing={0}>
                <Box layerStyle={'cardLeft'} backgroundImage={'url(/weather/images/rain.jpg)'}>

                </Box>
                <Box w={'30rem'} layerStyle={'cardRight'}>
                    <VStack spacing={2}>
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
                        <Text fontSize={'6rem'}>
                            {locationWeather?.temp_c}&deg;
                        </Text>
                        <Text fontSize={'3rem'}>
                            {locationWeather?.condition.text}
                        </Text>
                        <Text fontSize={'4rem'}>
                            {locationWeather?.humidity}
                            {locationWeather?.feelslike_c}
                        </Text>
                    </VStack>
                </Box>
            </HStack>
        </Flex>
    );

}