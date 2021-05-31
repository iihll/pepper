'use strict'

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const navGroupName = process.argv[4]
const chineseName = process.argv[3] || componentname
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../packages', componentname)
const Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main'

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName};`
  },
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="p-${componentname}"></div>
</template>

<script>
export default {
  name: 'P${ComponentName}'
}
</script>`
  },
  {
    filename: path.join('../../docs/zh-CN/component', `${componentname}.md`),
    content: `# ${ComponentName} ${chineseName}`
  },
  {
    filename: path.join('../../docs/component', `${componentname}.md`),
    content: `# ${ComponentName}`
  },
  {
    filename: path.join('../../test/unit/specs', `${componentname}.spec.js`),
    content: `import { createTest, destroyVM } from '../util';
import ${ComponentName} from 'packages/${componentname}';

describe('${ComponentName}', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(${ComponentName}, true);
    expect(vm.$el).to.exist;
  })
});
`
  },
  {
    filename: path.join(
      '../../packages/theme-chalk/src',
      `${componentname}.less`
    ),
    // TODO 待完善
    content: ''
    //     content: `@import "mixins/mixins";
    // @import "common/var"

    // @include b(${componentname}) {
    // }`
  },
  {
    filename: path.join('../../types', `${componentname}.d.ts`),
    content: `import { PepperComponent } from './component'

/** ${ComponentName} Component */
export declare class P${ComponentName} extends PepperComponent {
}`
  }
]

// 添加到 components.json
const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`)
  process.exit(1)
}
componentsFile[componentname] = `./packages/${componentname}/index.js`
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n')

// 添加到 index.less
const sassPath = path.join(
  __dirname,
  '../../packages/theme-chalk/src/index.less'
)
const sassImportText = `${fs.readFileSync(
  sassPath
)}@import "./${componentname}.less";`
fileSave(sassPath).write(sassImportText, 'utf8').end('\n')

// 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

// 添加到 nav.config.json
const navConfigFile = require('../../config/nav.config.json')

Object.keys(navConfigFile).forEach(lang => {
  let component = navConfigFile[lang].component
  const item =
    lang === 'zh-CN'
      ? [`${componentname}`, componentname + ' ' + chineseName]
      : componentname
  if (navGroupName) {
    if (component.filter(group => group.title === navGroupName)) {
      component.forEach(group => {
        if (group.title === navGroupName) {
          group.children.push(item)
        }
      })
    } else {
      component.push({
        title: navGroupName,
        children: [item]
      })
    }
  } else {
    component[component.length - 1].children.push(item)
  }
})

fileSave(path.join(__dirname, '../../config/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n')

console.log('DONE!')
