module.exports = {
  name: 'generate:module',
  alias: ['gm'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    const name = parameters.first
    const nameUpperFirstCase = name[0].toUpperCase() + name.substring(1)

    await generate({
      template: 'dto.js.ejs',
      target: `src/modules/${name}/dtos/ICreate${nameUpperFirstCase}DTO.ts`,
      props: { name: nameUpperFirstCase },
    })

    await generate({
      template: 'controller.js.ejs',
      target: `src/modules/${name}/infra/http/controllers/${nameUpperFirstCase}Controller.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'route.js.ejs',
      target: `src/modules/${name}/infra/http/routes/${name}.routes.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'entity.js.ejs',
      target: `src/modules/${name}/infra/typeorm/entities/${nameUpperFirstCase}.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'repository.js.ejs',
      target: `src/modules/${name}/infra/typeorm/repositories/${nameUpperFirstCase}Repository.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'fakeRepo.js.ejs',
      target: `src/modules/${name}/repositories/fakes/Fake${nameUpperFirstCase}Repository.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'interface.js.ejs',
      target: `src/modules/${name}/repositories/I${nameUpperFirstCase}Repository.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'showService.js.ejs',
      target: `src/modules/${name}/services/Show${nameUpperFirstCase}Service.ts`,
      props: { name, nameUpperFirstCase },
    })


    await generate({
      template: 'listService.js.ejs',
      target: `src/modules/${name}/services/List${nameUpperFirstCase}Service.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'deleteService.js.ejs',
      target: `src/modules/${name}/services/Delete${nameUpperFirstCase}Service.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'createService.js.ejs',
      target: `src/modules/${name}/services/Create${nameUpperFirstCase}Service.ts`,
      props: { name, nameUpperFirstCase },
    })

    await generate({
      template: 'updateService.js.ejs',
      target: `src/modules/${name}/services/Update${nameUpperFirstCase}Service.ts`,
      props: { name, nameUpperFirstCase },
    })

    info(`Generated module ${name}`)
  },
}
