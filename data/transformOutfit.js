import days from 'days';
import Geocoder from 'react-native-geocoding';
Geocoder.setApiKey('AIzaSyB1r__-bKujIux6naGjR7cQKeDux5HaYoM');
import {Asset, FileSystem, Constants, Svg } from 'expo';
import svgLib from './svgLib';

type OutfitHours = {
  monday_open: string,
  monday_close: string,
  tuesday_open: string,
  tuesday_close: string,
  wednesday_open: string,
  wednesday_close: string,
  thursday_open: string,
  thursday_close: string,
  friday_open: string,
  friday_close: string,
  saturday_open: string,
  saturday_close: string,
  sunday_open: string,
  sunday_close: string,
}

type OutfitData = {
  accentColor?: string,
  address?: string,
  color?: string,
  description?: string,
  address?: string,
  citystatezip?: string,
  hours?: string,
  id: number,
  latitude?: float,
  longitude?: float,
  filename: string,
  filename1x: string,
  instagram: string,
  tagline?: ?string,
  name: string,
}

const svgKeys = Object.keys(svgLib);
export default function transformOutfit(outfit, currentDate = new Date(), geoCatcher, promises): any {
  let day = days[currentDate.getDay()];
  let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:00`;
  //let openingTimeToday = hours[`${day.toLowerCase()}_open`];
  //let closingTimeToday = hours[`${day.toLowerCase()}_close`];
  debugger;
  //console.log("Geocatcher: " + typeof(geoCatcher));
  //sleep(500);
  let isGood = (!!outfit.address);
  if(isGood && typeof(geoCatcher) != "undefined") {
    //If you uncomment this then addresses will be geocoded and printed out.
    /**
    console.log("Transforming Outfit " + outfit.name );
    let fullAddress = outfit.address + ": " + outfit.citystatezip;
    let fromPromise = Geocoder.getFromLocation(fullAddress);
    fromPromise.then(
        Geocoder.getFromLocation(fullAddress).then(
        json => {
          var location = json.results[0].geometry.location;
          console.log(location.lat + ", " + location.lng);
          outfit.latitude = location.lat;
          outfit.longitude = location.lng;
          geoCatcher.push(outfit);
        },
        error => {
          console.log("Error " + error + " for address " + fullAddress);
        }
    ));
    promises.push(fromPromise);
     **/
  }

  let svgName = outfit.block + "." + outfit.side + "." + outfit.id + ".lego";
  let svg = svgLib[svgName];
  if(!svg) {
    console.log("!!!!!!!!!!!!! There was no svg found for: " + svgName);
    for (var i=0; i < svgKeys.length; i++) {
      if (svgKeys[i].indexOf(outfit.id) >= 0) {
        console.log("But there is one named: " + svgKeys[i]);
      }
    }
  }

  return {
    accentColor: '#000',
    address: outfit.citystatezip,
    city: "Austin",
    closingTimeToday: "4",
    color: outfit.color || '#fff',
    description: outfit.description,
    hours: outfit.hours,
    id: outfit.id,
    instagram: outfit.instagram,
    isOpen: true,
    isOpeningLater: false,
    latitude: outfit.latitude,
    logo: "http://www.doingthestreets.com/cdn/" + outfit.filename1x,
    longitude: outfit.longitude,
    name: outfit.name,
    openingTimeToday: "8",
    postalCode: "78704",
    smallLogo: svg,
    summary: outfit.tagline,
  };
}

async function readSVGXml(fileName, asset) {
  let fileUri = FileSystem.documentDirectory + fileName;
  let info = await FileSystem.getInfoAsync(fileUri, {})
  //const fileContents = await FileSystem.readFile(fileName);
  //console.log(`read from file: ${fileContents}`);
  //console.log("File Info: " + JSON.stringify(info, null, 2));
  //let assetInfo = Asset(asset);
  console.log("Asset info: " + JSON.stringify(assetInfo, null, 2));
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  while ((new Date().getTime() - start) > milliseconds);
}
