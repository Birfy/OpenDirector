import { define } from "./module-nj.js";
const tt = define("Time", function () {
  this.choice({
    utcTime: this.utctime(),
    generalTime: this.gentime(),
  });
});
const te = define("AttributeTypeValue", function () {
  this.seq().obj(this.key("type").objid(), this.key("value").any());
});
const tr = define("AlgorithmIdentifier", function () {
  this.seq().obj(
    this.key("algorithm").objid(),
    this.key("parameters").optional(),
    this.key("curve").objid().optional(),
  );
});
const tn = define("SubjectPublicKeyInfo", function () {
  this.seq().obj(
    this.key("algorithm").use(tr),
    this.key("subjectPublicKey").bitstr(),
  );
});
const ti = define("RelativeDistinguishedName", function () {
  this.setof(te);
});
const to = define("RDNSequence", function () {
  this.seqof(ti);
});
const ta = define("Name", function () {
  this.choice({
    rdnSequence: this.use(to),
  });
});
const ts = define("Validity", function () {
  this.seq().obj(this.key("notBefore").use(tt), this.key("notAfter").use(tt));
});
const tf = define("Extension", function () {
  this.seq().obj(
    this.key("extnID").objid(),
    this.key("critical").bool().def(false),
    this.key("extnValue").octstr(),
  );
});
const tu = define("TBSCertificate", function () {
  this.seq().obj(
    this.key("version").explicit(0).int().optional(),
    this.key("serialNumber").int(),
    this.key("signature").use(tr),
    this.key("issuer").use(ta),
    this.key("validity").use(ts),
    this.key("subject").use(ta),
    this.key("subjectPublicKeyInfo").use(tn),
    this.key("issuerUniqueID").implicit(1).bitstr().optional(),
    this.key("subjectUniqueID").implicit(2).bitstr().optional(),
    this.key("extensions").explicit(3).seqof(tf).optional(),
  );
});
export default define("X509Certificate", function () {
  this.seq().obj(
    this.key("tbsCertificate").use(tu),
    this.key("signatureAlgorithm").use(tr),
    this.key("signatureValue").bitstr(),
  );
});
