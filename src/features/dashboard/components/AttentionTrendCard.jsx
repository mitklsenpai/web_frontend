import { Card, Typography, Box, Stack } from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';

const margin = { right: 24, top: 40 };
const attention = [82, 75, 68, 70, 73, 78, 84];
const baseline = [60, 58, 62, 55, 63, 59, 61];
const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const legendColors = {
  attention: '#3b82f6',
  baseline: '#10b981',
};

export default function AttentionTrendCard() {
  return (
    <Card
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider"
      }}
    >
      <Typography variant="h3" gutterBottom>
        Attention Trend Chart
      </Typography>

      <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: legendColors.attention }}>
          <Box component="span" sx={{ width: 12, height: 3, borderRadius: 999, bgcolor: legendColors.attention, display: 'inline-block' }} />
          <Typography variant="caption" sx={{ color: 'text.light', fontWeight: 600 }}>
            Attention
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: legendColors.baseline }}>
          <Box component="span" sx={{ width: 12, height: 3, borderRadius: 999, bgcolor: legendColors.baseline, display: 'inline-block' }} />
          <Typography variant="caption" sx={{ color: 'text.light', fontWeight: 600 }}>
            Baseline
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ width: '100%', height: 320 }}>
        <LineChart
          hideLegend
          sx={(theme) => ({
            '&& .MuiChartsAxis-line, && .MuiChartsAxis-tick': {
              stroke: theme.palette.text.chart
            },
            '&& .MuiChartsAxis-tickLabel': {
              fill: theme.palette.text.dark
            },
          })}

          series={[
            { data: attention, label: 'Attention', color: legendColors.attention },
            { data: baseline, label: 'Baseline', color: legendColors.baseline },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels, height: 28 }]}
          yAxis={[{ width: 50 }]}
          margin={margin}
        />
      </Box>

    </Card>
  );
}