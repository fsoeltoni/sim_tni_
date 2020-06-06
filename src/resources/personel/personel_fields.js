import jenis_personel from "../jenis_personel";
import jenis_personel_fields from "../jenis_personel/jenis_personel_fields";

export default {
  id: {
    source: "id",
    label: "Id",
  },
  jenis_personel: {
    source: jenis_personel.name + "_id",
    label: jenis_personel.options.label,
    reference: jenis_personel.name,
    sort: {
      field: jenis_personel_fields.id.source,
      order: "ASC",
    },
  },
  nama: {
    source: "nama",
    label: "Nama",
  },
  no_identitas: {
    source: "no_identitas",
    label: "No. Identitas",
  },
  tempat_lahir: {
    source: "tempat_lahir",
    label: "Tempat Lahir",
  },
  tanggal_lahir: {
    source: "tanggal_lahir",
    label: "Tanggal Lahir",
  },
};
