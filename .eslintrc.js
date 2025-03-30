module.exports = {
    extends: ['next/core-web-vitals', 'next/typescript', 'plugin:@tanstack/query/recommended'],
    plugins: ['prettier', 'unused-imports', 'import'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        quotes: ['error', 'single'],
        'no-console': ['error', { allow: ['error'] }],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        // Remove unused imports
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        // Import order
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
    },
};
