"use client";

import { Textarea, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  textarea: {
    marginBottom: theme.spacing.lg,
  },
}));

export default function TextArea({
  placeholder,
  label,
}: {
  placeholder: string;
  label: string;
}) {
  const { classes } = useStyles();

  return (
    <Textarea
      placeholder={placeholder}
      label={label}
      className={classes.textarea}
    />
  );
}
