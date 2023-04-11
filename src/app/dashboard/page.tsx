import Dropzone from "../components/dropzone";
import Form from "../components/form";
import Table from "../components/table";
import TextArea from "../components/textarea";

export default async function Dashboard() {
  return (
    <>
      <Form>
        <Dropzone />
        <TextArea placeholder="Your notes" label="Additional notes" />
      </Form>
      <Table />
    </>
  );
}
