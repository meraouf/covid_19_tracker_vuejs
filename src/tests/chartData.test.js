import chartData from '../components/ChartData.vue'

import { describe, expect, test, it } from 'vitest';

const chart = chartData.props;

describe('ChartData component', function () {
    test('props', function () {
        expect(chart).toBeDefined
    });
    test('props ID and background must be string', () => {
      expect(chart[0] && chart[1]).toBeTypeOf('string')
    })
});
