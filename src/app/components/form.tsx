"use client";

import {
  Button,
  Group,
  Input,
  Text,
  Textarea,
  createStyles,
  rem,
} from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import { Download, Send, X } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  form: {
    marginBottom: theme.spacing.lg,
  },

  wrapper: {
    position: "relative",
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  textarea: {
    marginBottom: theme.spacing.lg,
  },
}));

interface FormValues {
  notes?: string;
  invoice?: File;
}

const formConfig = {
  initialValues: {
    notes: "",
    invoice: undefined,
  },

  validate: {
    invoice: (value: unknown) =>
      value === undefined ? "Please attach an invoice" : null,
  },
};

export default function Form() {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  const form = useForm<FormValues>(formConfig);
  const hastErrorInvoice = Object.hasOwn(form.errors, "invoice");

  const onSubmit = (values: FormValues) => {
    console.log("values", values);
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => onSubmit(values))}
      className={classes.form}
    >
      <div className={classes.wrapper}>
        <Input.Wrapper label="Upload invoice" required mx="auto">
          <Dropzone
            style={{
              ...(hastErrorInvoice && { borderColor: "red" }),
            }}
            openRef={openRef}
            onDrop={(files) => {
              form.setFieldValue("invoice", files[0]);
            }}
            onReject={(files) => console.log("rejected files", files)}
            className={classes.dropzone}
            radius="md"
            accept={[MIME_TYPES.pdf]}
            maxSize={5 * 1024 ** 2}
          >
            <div style={{ pointerEvents: "none" }}>
              <Group position="center">
                <Dropzone.Accept>
                  <Download
                    size={rem(50)}
                    color={theme.colors[theme.primaryColor][6]}
                    stroke="1.5"
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <X size={rem(50)} color={theme.colors.red[6]} stroke="1.5" />
                </Dropzone.Reject>
              </Group>

              <Text ta="center" fw={700} fz="lg" mt="xl">
                <Dropzone.Accept>Drop files here</Dropzone.Accept>
                <Dropzone.Reject>Pdf file less than 5mb</Dropzone.Reject>
              </Text>
              <Text ta="center" fz="sm" mt="xs" c="dimmed">
                Drag&apos;n&apos;drop a file here to upload. We can accept only{" "}
                <i>.pdf</i> files that are less than 5mb in size.
              </Text>
            </div>
          </Dropzone>

          <Text c="red" size="xs" hidden={!hastErrorInvoice}>
            {form.errors["invoice"]}
          </Text>
        </Input.Wrapper>
      </div>
      <Textarea
        placeholder="Your notes"
        label="Additional notes"
        className={classes.textarea}
        {...form.getInputProps("notes")}
      />
      <Group position="right" mt="xl">
        <Button
          type="submit"
          radius="sm"
          w={180}
          leftIcon={<Send size="1rem" />}
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Send
        </Button>
      </Group>
    </form>
  );
}
