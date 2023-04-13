const dynamoose = require("dynamoose");

export const invoiceSchema = new dynamoose.Schema(
  {
    id: {
      hashKey: true,
      type: String,
      require: true,
    },
    user: {
      type: String,
      index: {
        name: "userEmailIndex",
        global: true,
      },
    },
    invoicePath: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    notes: String,
    createdAt: Number,
    updatedAt: Number,
  },
  {
    saveUnknown: false,
    timestamps: {
      createdAt: ["createAt"],
      updatedAt: ["updateAt"],
    },
  }
);
