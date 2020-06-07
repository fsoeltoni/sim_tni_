import lingkup from "../lingkup";
import lingkup_fields from "../lingkup/lingkup_fields";
import jenis_pomdam from "../jenis_pomdam";
import jenis_pomdam_fields from "../jenis_pomdam/jenis_pomdam_fields";

export default {
  id: {
    source: "id",
    label: "Id",
  },
  lingkup: {
    source: lingkup.name + "_id",
    label: lingkup.options.label,
    reference: lingkup.name,
    sort: {
      field: lingkup_fields.id.source,
      order: "ASC",
    },
  },
  jenis_pomdam: {
    source: jenis_pomdam.name + "_id",
    label: jenis_pomdam.options.label,
    reference: jenis_pomdam.name,
    sort: {
      field: jenis_pomdam_fields.id.source,
      order: "ASC",
    },
  },
  nama: {
    source: "nama",
    label: "Nama",
  },
  kode: {
    source: "kode",
    label: "Kode",
  },
  markas: {
    source: "markas",
    label: "Markas",
  },
};
