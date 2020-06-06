import jenis_personel from "../jenis_personel";
import jenis_personel_fields from "../jenis_personel/jenis_personel_fields";
import jenjang_kepangkatan from "../jenjang_kepangkatan";
import jenjang_kepangkatan_fields from "../jenjang_kepangkatan/jenjang_kepangkatan_fields";

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
  jenjang_kepangkatan: {
    source: jenjang_kepangkatan.name + "_id",
    label: jenjang_kepangkatan.options.label,
    reference: jenjang_kepangkatan.name,
    sort: {
      field: jenjang_kepangkatan_fields.id.source,
      order: "ASC",
    },
  },
  nama: {
    source: "nama",
    label: "Nama",
  },
  kode: {
    source: "kode",
    label: "kode",
  },
};
