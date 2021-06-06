import { createTest, destroyVM } from '../util';
import Link from 'packages/link';

describe('Link', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Link, true);
    expect(vm.$el).to.exist;
  })

  it('size', () => {
    vm = createTest(Link, {
      size: 'yellow'
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.classList.contains('p-link-yellow')).to.be.true;
  });

  it('href', () => {
    vm = createTest(Link, {
      href: 'button.html'
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.getAttribute('href')).to.be.equal('button.html');
  });

  it('target', () => {
    vm = createTest(Link, {
      target: 'self'
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.getAttribute('self')).to.be.equal('self');
  });

  it('underline', () => {
    vm = createTest(Link, {
      underline: false
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.classList.contains('p-link-underline')).to.be.false;
  });

  it('disabled', () => {
    vm = createTest(Link, {
      disabled: true
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.classList.contains('p-link-disabled')).to.be.true;
  });
});

