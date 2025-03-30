import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getApi } from 'resources/data/api';

import { UseAddContactRequest, UseAddContactResponse } from './useCreateUnisenderContact-types';
import { unisenderPaths } from '../paths';

export const useCreateUnisenderContact = (
    configOptions?: UseMutationOptions<UseAddContactResponse, AxiosError, UseAddContactRequest>,
) => {
    return useMutation({
        ...configOptions,
        mutationKey: [unisenderPaths.contacts],
        mutationFn: async (params) => getApi('v1').post(unisenderPaths.contacts, params),
    });
};
