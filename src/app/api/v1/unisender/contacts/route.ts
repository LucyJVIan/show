import { NextRequest, NextResponse } from 'next/server';

import { getApi } from 'resources/data/api';

interface UnisenderResponseCreateContact {
    code?: string;
    error?: string;
    result: { person_id: number } | '';
}

interface RequestContact {
    type: string;
    phone?: string;
    email?: string;
    name?: string;
}

export const POST = async (request: NextRequest) => {
    const params = await request.json();
    const normalizeFields = (params: RequestContact) => {
        const { type, phone, email, name } = params;

        switch (type) {
            case 'subscribe':
                return {
                    list_ids: [String(process.env.UNISENDER_SUBSCRIBE_LIST_ID)],
                    fields: {
                        email: email,
                        Name: name,
                        phone: phone,
                    },
                };
            case 'quickSubscribe':
                return {
                    list_ids: [String(process.env.UNISENDER_QUICK_SUBSCRIBE_LIST_ID)],
                    fields: {
                        phone: phone,
                    },
                };
            case 'subscribeTraining':
                return {
                    list_ids: [String(process.env.UNISENDER_TRAINING_LIST_ID)],
                    fields: {
                        email: email,
                        Name: name,
                        phone: phone,
                    },
                };
        }
    };
    try {
        const fields = normalizeFields(params);

        if (!fields) {
            return NextResponse.json({ message: 'Такого типа не существует' }, { status: 500 });
        }

        const response = await getApi('unisender').get<UnisenderResponseCreateContact>('/subscribe', {
            params: {
                format: 'json',
                api_key: String(process.env.UNISENDER_API_TOKEN),
                overwrite: 0,
                double_optin: 3,
                ...fields,
            },
        });

        if ('error' in response.data) {
            return NextResponse.json({ message: 'Ошибка создания контакта Unisender' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Контакт успешно добавлен' });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 400 });
        }

        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
};
