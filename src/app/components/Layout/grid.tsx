"use client";

import { Container, Grid as MGrid, Skeleton } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

export default function Grid({ children }: { children: React.ReactNode }) {
  return (
    <Container my="md">
      <MGrid>
        <MGrid.Col span={12}>{children}</MGrid.Col>
      </MGrid>
    </Container>
  );
}
