import { createTest, createVue, destroyVM } from '../util';
import Button from 'packages/button';

describe('Button', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Button, true);
    expect(vm.$el).to.exist;
  })

  it('size', () => {
    vm = createTest(Button, {
      size: 'l'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('p-button-l')).to.be.true;
  });

  it('type', () => {
    vm = createTest(Button, {
      size: 'pepper'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('p-button-pepper')).to.be.true;
  });

  it('disabled', () => {
    vm = createTest(Button, {
      disabled: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('p-button-disabled')).to.be.true;
  });

  it('circle', () => {
    vm = createTest(Button, {
      circle: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('p-button-circle')).to.be.true;
  });

  it('text', () => {
    vm = createTest(Button, {
      text: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('p-button-text')).to.be.true;
  });

  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <p-button @click="handleClick"></p-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.click();

    setTimeout(() => {
      expect(result).to.exist;
      done();
    }, 20);
  });
});

