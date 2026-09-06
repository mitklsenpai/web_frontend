import { Card, Typography, Box } from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';

const margin = { right: 24, top: 40 };
const attention = [82, 75, 68, 70, 73, 78, 84];
const baseline = [60, 58, 62, 55, 63, 59, 61];
const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function AttentionTrendCard() {
  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: "divider"
      }}
    >
      <Typography variant="h6" sx={{ pt: 3, px: 3 }}>
        Xu hướng chú ý
      </Typography>

      <Box sx={{ width: '100%', height: 320, py: 2 }}>
        <LineChart
          series={[
            { data: attention, label: 'Attention' },
            { data: baseline, label: 'Baseline' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels, height: 28 }]}
          yAxis={[{ width: 50 }]}
          margin={margin}
        />
      </Box>
    </Card>
  );
}