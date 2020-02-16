import { styleFunction } from '@uifabricshared/foundation-tokens';
import { ViewProps } from 'react-native';
import { IPersonaCoinTokens } from './PersonaCoin.types';
import { ITheme } from '@uifabricshared/theming-ramp';
import { convertCoinColor, calculateEffectiveSizes } from './PersonaCoin.helpers';
import { defaultColor } from './PersonaCoin.settings';

const _initialsBackgroundKeyProps: (keyof IPersonaCoinTokens)[] = ['coinSize', 'size', 'coinColor', 'backgroundColor'];

function _buildInitialsBackgroundStyles(tokenProps: IPersonaCoinTokens /*, theme: ITheme*/): ViewProps {
  const { physicalSize } = calculateEffectiveSizes(tokenProps);

  const { backgroundColor, coinColor } = tokenProps;
  let effectiveBackgroundColor: string;
  if (coinColor) {
    effectiveBackgroundColor = convertCoinColor(coinColor);
  } else if (backgroundColor) {
    effectiveBackgroundColor = backgroundColor;
  } else {
    effectiveBackgroundColor = convertCoinColor(defaultColor);
  }

  return {
    style: {
      borderRadius: physicalSize / 2,
      width: physicalSize,
      height: physicalSize,
      flexGrow: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: effectiveBackgroundColor
    }
  };
}

export const buildInitialsBackgroundStyles = styleFunction<ViewProps, IPersonaCoinTokens, ITheme>(
  _buildInitialsBackgroundStyles,
  _initialsBackgroundKeyProps
);
