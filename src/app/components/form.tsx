"use client";

import { Button, Group, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";

const useStyles = createStyles((theme) => ({
  form: {
    marginBottom: theme.spacing.lg,
  },
}));

export default function Form({ children }: { children: React.ReactNode }) {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {},
    validate: {},
  });

  return (
    <form onSubmit={form.onSubmit(() => {})} className={classes.form}>
      {children}
      <Group position="right" mt="xl">
        <Button type="submit" radius="xl">
          Send
        </Button>
      </Group>
    </form>
  );
}
