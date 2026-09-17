// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(_theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8
        }
      }
    }
  };
}
