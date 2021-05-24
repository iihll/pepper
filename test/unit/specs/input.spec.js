import { createTest, destroyVM } from '../util';
import Input from 'packages/input';

describe('Input', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Input, true);
    expect(vm.$el).to.exist;
  })
});

