# Zerops x Solid - Drizzle

Solid is a declarative JavaScript library for creating fast, dynamic web apps. [Zerops](https://zerops.io) simplifies deploying and running Solid.js apps, both server-side rendered and static. This recipe showcases the Drizzle ORM integration with PostgreSQL. For the static version, see [zeropsio/recipe-solidjs-static](https://github.com/zeropsio/recipe-solidjs-static).

![solid](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-solid.svg)

<br/>

## Deploy on Zerops

To deploy directly on Zerops, you can either click the deploy button below or manually copy the [import yaml](https://github.com/zeropsio/recipe-solidjs-nodejs/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/solidjs-nodejs)

<br/>

## Recipe Features

- Latest Solid version generated with [SolidStart](https://start.solidjs.com/)
- Seamless database management using [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL on **Zerops Managed PostgreSQL** service
- Production-ready and scalable out of the box

<br/>

## Production Readiness and Scalability

This recipe is production-ready and will automatically scale horizontally by adding more containers during high traffic surges. For the highest baseline reliability and resilience, start with at least two containers (add `minContainers: 2` in the recipe YAML under the `app` service section, or change the minimum containers in the "Automatic Scaling configuration" section of the service detail).

For advanced and structured logging, consider setting up [Winston](https://github.com/winstonjs/winston).

<br/>

## Integrating with Existing Solid Apps

To efficiently run your existing Solid app on Zerops, no changes are needed in the codebase beyond the standard installation. Simply add [zerops.yml](https://github.com/zeropsio/recipe-solidjs-nodejs/blob/main/zerops.yml) to your repository.

<br/>
<br/>

Need help setting up your project? Join the [Zerops Discord community](https://discord.com/invite/WDvCZ54) for assistance.


---

Arjun Aditya is building Gray Cup - a company which is around tea, coffee, and softwares. You can explore more below

• [https://graycup.org](https://graycup.org)

• [https://graycup.com](https://graycup.com)

• [https://arjunaditya.xyz](https://arjunaditya.xyz)

He still writes code, designs interfaces, and somehow keeps moving forward with a cup of tea or coffee in hand [ the ritual that keeps him sane when the burnout starts creeping in ]

Buy coffee or tea:

[https://graycup.in](https://graycup.in)

Bulk coffee or tea:

[https://b2b.graycup.in](https://b2b.graycup.in)

[https://bulkgreencoffee.com](https://bulkgreencoffee.com)

[https://bulkctc.com](https://bulkctc.com)
