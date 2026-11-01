import $ from "sG";
export const certificate = require("./module-On_2.js");
export const RSAPrivateKey = $.define("RSAPrivateKey", function () {
  this.seq().obj(
    this.key("version").int(),
    this.key("modulus").int(),
    this.key("publicExponent").int(),
    this.key("privateExponent").int(),
    this.key("prime1").int(),
    this.key("prime2").int(),
    this.key("exponent1").int(),
    this.key("exponent2").int(),
    this.key("coefficient").int(),
  );
});
export const RSAPublicKey = $.define("RSAPublicKey", function () {
  this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
});
const ee = $.define("AlgorithmIdentifier", function () {
  this.seq().obj(
    this.key("algorithm").objid(),
    this.key("none").null_().optional(),
    this.key("curve").objid().optional(),
    this.key("params")
      .seq()
      .obj(this.key("p").int(), this.key("q").int(), this.key("g").int())
      .optional(),
  );
});
export const PublicKey = $.define("SubjectPublicKeyInfo", function () {
  this.seq().obj(
    this.key("algorithm").use(ee),
    this.key("subjectPublicKey").bitstr(),
  );
});
export const PrivateKey = $.define("PrivateKeyInfo", function () {
  this.seq().obj(
    this.key("version").int(),
    this.key("algorithm").use(ee),
    this.key("subjectPrivateKey").octstr(),
  );
});
export const EncryptedPrivateKey = $.define(
  "EncryptedPrivateKeyInfo",
  function () {
    this.seq().obj(
      this.key("algorithm")
        .seq()
        .obj(
          this.key("id").objid(),
          this.key("decrypt")
            .seq()
            .obj(
              this.key("kde")
                .seq()
                .obj(
                  this.key("id").objid(),
                  this.key("kdeparams")
                    .seq()
                    .obj(this.key("salt").octstr(), this.key("iters").int()),
                ),
              this.key("cipher")
                .seq()
                .obj(this.key("algo").objid(), this.key("iv").octstr()),
            ),
        ),
      this.key("subjectPrivateKey").octstr(),
    );
  },
);
export const DSAPrivateKey = $.define("DSAPrivateKey", function () {
  this.seq().obj(
    this.key("version").int(),
    this.key("p").int(),
    this.key("q").int(),
    this.key("g").int(),
    this.key("pub_key").int(),
    this.key("priv_key").int(),
  );
});
export const DSAparam = $.define("DSAparam", function () {
  this.int();
});
const et = $.define("ECParameters", function () {
  this.choice({
    namedCurve: this.objid(),
  });
});
export const ECPrivateKey = $.define("ECPrivateKey", function () {
  this.seq().obj(
    this.key("version").int(),
    this.key("privateKey").octstr(),
    this.key("parameters").optional().explicit(0).use(et),
    this.key("publicKey").optional().explicit(1).bitstr(),
  );
});
export const signature = $.define("signature", function () {
  this.seq().obj(this.key("r").int(), this.key("s").int());
});
