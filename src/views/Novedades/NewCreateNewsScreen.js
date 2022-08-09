import React from 'react';
import { VStack, Center, Heading, NativeBaseProvider } from 'native-base';
const NewCreateNewsScreen = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VStack space={4} alignItems="center">
          <Heading textAlign="center" mb="10">
            VStack
          </Heading>
          <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3} />
          <Center w="64" h="20" bg="secondary.500" rounded="md" shadow={3} />
          <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default NewCreateNewsScreen;
