import React from "react";
import { Button, Container, Heading, Select, Text, VStack } from "@chakra-ui/react";

type weatherDataLibraryType = {
    [key: string]: {
        current: {
            [key: string]: string;
        };
        location: {
            [key: string]: string;
        };
    };
};

export default function Weather() {
    const [location, setLocation] = React.useState<string>("london");
    const weatherDataLibrary = React.useRef<weatherDataLibraryType>({});

    const locations = [
        {
            city: "Bangkok",
            country: "Thailand",
            continent: "Asia",
        },
        {
            city: "Tokyo",
            country: "Japan",
            continent: "Asia",
        },
        {
            city: "Seoul",
            country: "South Korea",
            continent: "Asia",
        },
        {
            city: "Mumbai",
            country: "India",
            continent: "Asia",
        },
        {
            city: "Dubai",
            country: "the United Arab Emirates",
            continent: "Asia",
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
            city: "Amsterdam",
            country: "Netherlands",
            continent: "Europe",
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
            city: "NairoAccrabi",
            country: "Ghana",
            continent: "Africa",
        },
        {
            city: "New York City",
            country: "the United States",
            continent: "North America",
        },
        {
            city: "Chicago",
            country: "the United States",
            continent: "North America",
        },
        {
            city: "Chicago",
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
            city: "Rio de Janeiro",
            country: "Brazil",
            continent: "South America",
        },
        {
            city: "Buenos Aires",
            country: "Argentina",
            continent: "South America",
        },
        {
            city: "Santiago",
            country: "Chile",
            continent: "South America",
        },
        {
            city: "Cartagena",
            country: "Colombia",
            continent: "South America",
        },
        {
            city: "Auckland",
            country: "New Zealand",
            continent: "Oceania",
        },
        {
            city: "Wellington",
            country: "New Zealand",
            continent: "Oceania",
        },
        {
            city: "Sydney",
            country: "Australia",
            continent: "Oceania",
        },
        {
            city: "Melbourne",
            country: "Australia",
            continent: "Oceania",
        },
        {
            city: "Brisbane",
            country: "Queensland",
            continent: "Oceania",
        },
    ];

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
    
    // const locationsGroupByContinent = locations.group(({ continent }) => continent);


    React.useEffect(() => {
        // fetchCurrentWeather(location);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchCurrentWeather = async (location: string) => {

        console.log('weatherDataLibrary', weatherDataLibrary.current)

        if (weatherDataLibrary.current[location]) {
            return weatherDataLibrary.current[location];
        }

        // TODO: find a better way to store API keys
        const API_KEY = "0d2d015c63674608af1154716232007";

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);

        const data = await response.json();

        console.log('data', data)
        weatherDataLibrary.current[location] = data;
        // return data[currency];
    };

    return (
        <Container
            style={{
                backgroundImage: "url(/weather/images/sunny.jpg)",
                backgroundSize: "cover",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
            }}
            color={'white'}
            height={'100vh'}
        >
            <VStack spacing={2}>
                <Select placeholder='Select option' color={'black'}>
                    <option value='option1' disabled>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Heading as={'h1'} fontSize={'10rem'}>
                    19&deg;
                </Heading>
                <Text fontSize={'4rem'}>
                    Sunny
                </Text>
                <Button onClick={() => fetchCurrentWeather("New York")}>Try</Button>
            </VStack>
        </Container>

    );
}