import React, { useState } from "react";
import { Button, Text, View } from "react-native";

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Whiskers" />
      <Cat name="Lizzie" />
    </>
  );
};

export default Cafe;
