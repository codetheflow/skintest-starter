import { nodePlatform } from '@skintest/platform';
import { exploreNodeProjects, playwrightLauncher } from '@skintest/plugins';
import { ENV } from './skintest-now';

const launcher = playwrightLauncher(ENV.options);

nodePlatform(...ENV.plugins)
  .then(platform =>
    exploreNodeProjects(...ENV.paths)
      .filter(uri => ENV.project.test(uri))
      .forEach(uri => platform.newProject(uri, project => project.run(launcher)))
      .finally(() => platform.destroy())
  );