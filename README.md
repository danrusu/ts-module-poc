# ts-module-poc

### 1. Build

```bash
npm run build
```

### 2. Test module localy

```bash
npm link
```

- from another repository where you want to import it:

```bash
npm link @qatools/ts-module-poc
# In a .ts file use:
# import { Test, Person } from '@qatools/ts-module-poc';
```

### 3. Publish to npm registry

```bash
npm run publish
```

### [Npm package](https://www.npmjs.com/package/@qatools/ts-module-poc)
