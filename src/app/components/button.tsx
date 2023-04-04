'use client';
import { Button as MButton } from '@mantine/core';

export default function Button() {
    return <MButton variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Settings</MButton>;
}
