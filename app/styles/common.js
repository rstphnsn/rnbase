import { StyleSheet } from 'react-native';

export const BLACK = '#1A1D22';
export const WHITE = '#FFFFFF';
export const MID_GREY = '#666666';
export const BLUE = '#0AC8FF';

export const h1Size = 28;
export const h2Size = 18;
export const h3Size = 16;
export const h4Size = 14;
export const h5Size = 18;
export const pSize = 14;

export const type = StyleSheet.create({
  h1: {
    color: WHITE,
    fontFamily: 'Arial',
    fontSize: h1Size,
    marginBottom: 20
  },
  h2: {
    color: WHITE,
    fontFamily: 'Arial',
    fontSize: h2Size,
    textAlign: 'center',
    marginBottom: 20
  },
  h3: {
    fontSize: h3Size
  },
  h4: {
    color: BLACK,
    fontFamily: 'Arial',
    fontSize: h4Size
  },
  h5: {
    color: BLACK,
    fontFamily: 'Arial',
    fontSize: h5Size
  },
  p: {
    color: MID_GREY,
    fontFamily: 'Arial',
    fontSize: pSize
  },
  link: {
    color: BLUE
  }
});



export const layout = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    backgroundColor: BLACK,
    flex: 1
  },
});
