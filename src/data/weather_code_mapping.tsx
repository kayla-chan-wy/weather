import { BsCloudDrizzle, BsCloudFog, BsCloudLightning, BsCloudLightningRain, BsCloudMoon, BsCloudRain, BsCloudRainHeavy, BsClouds, BsCloudSleet, BsCloudSnow, BsCloudSun, BsCloudy, BsMoonStars, BsSnow, BsSnow2, BsSun } from 'react-icons/bs'

type WeatherCodes = {
    [key: string]: {
        icon: {
            [key: string]: React.ElementType;
        };
        image: {
            [key: string]: string;
        };
    };
};

export const weatherCodes: WeatherCodes = {
    // Sunny / Clear
    1000: {
        icon: {
            day: BsSun,
            night: BsMoonStars,
        },
        image: {
            day: "sunny",
            night: "clear",
        },
    },
    // Partly cloudy
    1003: {
        icon: {
            day: BsCloudSun,
            night: BsCloudMoon,
        },
        image: {
            day: "sunny",
            night: "clear",
        },
    },
    // Cloudy
    1006: {
        icon: {
            day: BsCloudy,
            night: BsCloudy,
        },
        image: {
            day: "day-cloudy",
            night: "night-cloudy",
        },
    },
    // Overcast
    1009: {
        icon: {
            day: BsClouds,
            night: BsClouds,
        },
        image: {
            day: "day-cloudy",
            night: "night-cloudy",
        },
    },
    // Mist
    1030: {
        icon: {
            day: BsCloudFog,
            night: BsCloudFog,
        },
        image: {
            day: "fog",
            night: "fog",
        },
    },
    // Patchy rain possible
    1063: {
        icon: {
            day: BsCloudDrizzle,
            night: BsCloudDrizzle,
        },
        image: {
            day: "rain",
            night: "rain",
        },
    },
    // Patchy snow possible
    1066: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Patchy sleet possible
    1069: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Patchy freezing drizzle possible
    1072: {
        icon: {
            day: BsCloudDrizzle,
            night: BsCloudDrizzle,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Thundery outbreaks possible
    1087: {
        icon: {
            day: BsCloudLightning,
            night: BsCloudLightning,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
    // Blowing snow
    1114: {
        icon: {
            day: BsSnow,
            night: BsSnow,
        },
        image: {
            day: "day-snow",
            night: "night-show",
        },
    },
    // Blizzard
    1117: {
        icon: {
            day: BsSnow,
            night: BsSnow,
        },
        image: {
            day: "day-snow",
            night: "night-show",
        },
    },
    // Fog
    1135: {
        icon: {
            day: BsCloudFog,
            night: BsCloudFog,
        },
        image: {
            day: "fog",
            night: "fog",
        },
    },
    // Freezing fog
    1147: {
        icon: {
            day: BsCloudFog,
            night: BsCloudFog,
        },
        image: {
            day: "fog",
            night: "fog",
        },
    },
    // Patchy light drizzle
    1150: {
        icon: {
            day: BsCloudDrizzle,
            night: BsCloudDrizzle,
        },
        image: {
            day: "rain",
            night: "rain",
        },
    },
    // Light drizzle
    1153: {
        icon: {
            day: BsCloudDrizzle,
            night: BsCloudDrizzle,
        },
        image: {
            day: "rain",
            night: "rain",
        },
    },
    // Freezing drizzle
    1168: {
        icon: {
            day: BsCloudDrizzle,
            night: BsCloudDrizzle,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Heavy freezing drizzle
    1171: {
        icon: {
            day: BsCloudDrizzle,
            night: BsCloudDrizzle,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Patchy light rain
    1180: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "rain",
            night: "rain",
        },
    },
    // Light rain
    1183: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "rain",
            night: "rain",
        },
    },
    // Moderate rain at times
    1186: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "rain",
            night: "rain",
        },
    },
    // Moderate rain
    1189: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
    // Heavy rain at times
    1192: {
        icon: {
            day: BsCloudRainHeavy,
            night: BsCloudRainHeavy,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
    // Heavy rain
    1195: {
        icon: {
            day: BsCloudRainHeavy,
            night: BsCloudRainHeavy,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
    // Light freezing rain
    1198: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Moderate or heavy freezing rain
    1201: {
        icon: {
            day: BsCloudRainHeavy,
            night: BsCloudRainHeavy,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Light sleet
    1204: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Moderate or heavy sleet
    1207: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Patchy light snow
    1210: {
        icon: {
            day: BsCloudSnow,
            night: BsCloudSnow,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Light snow
    1213: {
        icon: {
            day: BsCloudSnow,
            night: BsCloudSnow,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Patchy moderate snow
    1216: {
        icon: {
            day: BsCloudSnow,
            night: BsCloudSnow,
        },
        image: {
            day: "day-snow",
            night: "night-snow",
        },
    },
    // Moderate snow
    1219: {
        icon: {
            day: BsSnow,
            night: BsSnow,
        },
        image: {
            day: "day-snow",
            night: "night-snow",
        },
    },
    // Patchy heavy snow
    1222: {
        icon: {
            day: BsSnow,
            night: BsSnow,
        },
        image: {
            day: "day-snow",
            night: "night-snow",
        },
    },
    // Heavy snow
    1225: {
        icon: {
            day: BsSnow,
            night: BsSnow,
        },
        image: {
            day: "day-snow",
            night: "night-snow",
        },
    },
    // Ice pellets
    1237: {
        icon: {
            day: BsSnow2,
            night: BsSnow2,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Light rain shower
    1240: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Moderate or heavy rain shower
    1243: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
    // Torrential rain shower
    1246: {
        icon: {
            day: BsCloudRain,
            night: BsCloudRain,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
    // Light sleet showers
    1249: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Moderate or heavy sleet showers
    1252: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Light snow showers
    1255: {
        icon: {
            day: BsCloudSnow,
            night: BsCloudSnow,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Moderate or heavy snow showers
    1258: {
        icon: {
            day: BsCloudSnow,
            night: BsCloudSnow,
        },
        image: {
            day: "day-snow",
            night: "night-show",
        },
    },
    // Light showers of ice pellets
    1261: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Moderate or heavy showers of ice pellets
    1264: {
        icon: {
            day: BsCloudSleet,
            night: BsCloudSleet,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Patchy light rain with thunder
    1273: {
        icon: {
            day: BsCloudLightningRain,
            night: BsCloudLightningRain,
        },
        image: {
            day: "rain",
            night: "rain",
        },
    },
    // Moderate or heavy rain with thunder
    1276: {
        icon: {
            day: BsCloudLightningRain,
            night: BsCloudLightningRain,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
    // Patchy light snow with thunder
    1279: {
        icon: {
            day: BsCloudLightningRain,
            night: BsCloudLightningRain,
        },
        image: {
            day: "sleet",
            night: "sleet",
        },
    },
    // Moderate or heavy snow with thunder
    1282: {
        icon: {
            day: BsCloudLightningRain,
            night: BsCloudLightningRain,
        },
        image: {
            day: "heavy-rain",
            night: "heavy-rain",
        },
    },
};