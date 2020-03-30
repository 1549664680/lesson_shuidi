import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis'

const xs = [1, 2, 3, 4];
const yx = [1, 3, 5, 7];

tfvis.render.scatterplot(
  {
    name: '数据集'
  },
  {
    values: xs.map((x, i) => {
      return {
        x,
        y: yx[i]
      }
    })
  }
)