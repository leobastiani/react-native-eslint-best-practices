import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
export function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
}
