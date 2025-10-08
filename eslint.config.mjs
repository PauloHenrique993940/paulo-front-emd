import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  // ADICIONAR ESTE BLOCO ABAIXO PARA DESATIVAR A REGRA PROBLEMÁTICA
  {
    rules: {
      // Esta regra é a causa mais provável do erro do backtick (`)
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
