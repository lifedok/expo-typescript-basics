import { View } from "react-native";
import { useEffect, useState } from "react";


export default function responsiveContainer() {
  const [width, height] = useWindowResize();
  useEffect(()=>{
    // your operations
  }, [width, height])

  console.log('width', width)
  console.log('height', height)
  return(
    <View>
      qw
    </View>
  )
}

export function useWindowResize() {
  const [dimension, setDimension] = useState([0, 0]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimension([window.innerWidth, window.innerHeight])
    });
    return () => {
      window.removeEventListener("resize", () => {
        setDimension([window.innerWidth, window.innerHeight])
      })
    }
  }, []);

  return dimension;
}
