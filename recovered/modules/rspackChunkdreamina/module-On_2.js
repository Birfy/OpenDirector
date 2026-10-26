import $ from "sG";
const ee = $.define("Time", function () {
  this.choice({
    utcTime: this.utctime(),
    generalTime: this.gentime(),
  });
});
const et = $.define("AttributeTypeValue", function () {
  this.seq().obj(this.key("type").objid(), this.key("value").any());
});
const er = $.define("AlgorithmIdentifier", function () {
  this.seq().obj(
    this.key("algorithm").objid(),
    this.key("parameters").optional(),
    this.key("curve").objid().optional(),
  );
});
const en = $.define("SubjectPublicKeyInfo", function () {
  this.seq().obj(
    this.key("algorithm").use(er),
    this.key("subjectPublicKey").bitstr(),
  );
});
const ei = $.define("RelativeDistinguishedName", function () {
  this.setof(et);
});
const ea = $.define("RDNSequence", function () {
  this.seqof(ei);
});
const eo = $.define("Name", function () {
  this.choice({
    rdnSequence: this.use(ea),
  });
});
const es = $.define("Validity", function () {
  this.seq().obj(this.key("notBefore").use(ee), this.key("notAfter").use(ee));
});
const ef = $.define("Extension", function () {
  this.seq().obj(
    this.key("extnID").objid(),
    this.key("critical").bool().def(false),
    this.key("extnValue").octstr(),
  );
});
const eu = $.define("TBSCertificate", function () {
  this.seq().obj(
    this.key("version").explicit(0).int().optional(),
    this.key("serialNumber").int(),
    this.key("signature").use(er),
    this.key("issuer").use(eo),
    this.key("validity").use(es),
    this.key("subject").use(eo),
    this.key("subjectPublicKeyInfo").use(en),
    this.key("issuerUniqueID").implicit(1).bitstr().optional(),
    this.key("subjectUniqueID").implicit(2).bitstr().optional(),
    this.key("extensions").explicit(3).seqof(ef).optional(),
  );
});
export default $.define("X509Certificate", function () {
  this.seq().obj(
    this.key("tbsCertificate").use(eu),
    this.key("signatureAlgorithm").use(er),
    this.key("signatureValue").bitstr(),
  );
});
