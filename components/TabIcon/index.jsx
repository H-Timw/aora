import classNames from 'classnames'
import React from 'react'
import { Image, Text, View } from 'react-native';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image source={icon}
        className="w-6 h-6"
        resizeMode="contain"
        tintColor={color}
      />
      <Text className={classNames("text-xs", {
        "font-psemibold": focused,
        "font-pregular": !focused
      })} style={{ color: color }}>{name}</Text>
    </View >
  )
}

export default TabIcon