import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'public/**'],
  },
  ...compat.extends('next/core-web-vitals'),
  prettierRecommended,
  {
    rules: {
      camelcase: 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: [
            'function-declaration',
            'function-expression',
            'arrow-function',
          ],
        },
      ],
      'no-restricted-exports': [
        'error',
        { restrictDefaultExports: { defaultFrom: false } },
      ],
      'react/require-default-props': 'off',
      'react-hooks/refs': 'warn',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
    settings: {
      'import/resolver': {
        alias: { map: [['@', './']] },
      },
    },
  },
];

export default config;
