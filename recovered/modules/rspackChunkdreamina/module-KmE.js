import a from "./module-yC_2.js";
import { callValidateCode } from "./module-gcE.js";
import { Name, _ as __1, nil, stringify } from "./module-uEg.js";
import o from "./module-drl.js";
import { SchemaEnv, resolveRef } from "./module-VKO.js";
import { mergeEvaluated } from "./module-c5o.js";
function d(e, t, r, $async) {
  let { gen, it } = e;
  let { allErrors, schemaEnv, opts } = it;
  let p = opts.passContext ? o.this : nil;
  function h(e) {
    let t = (0, __1)`${e}.errors`;
    gen.assign(
      o.vErrors,
      (0, __1)`${o.vErrors} === null ? ${t} : ${o.vErrors}.concat(${t})`,
    );
    gen.assign(o.errors, (0, __1)`${o.vErrors}.length`);
  }
  function m(e) {
    let t;
    if (!it.opts.unevaluated) {
      return;
    }
    let a =
      (t = r == null ? undefined : r.validate) == null
        ? undefined
        : t.evaluated;
    if (it.props !== true) {
      if (a && !a.dynamicProps) {
        if (a.props !== undefined) {
          it.props = mergeEvaluated.props(gen, a.props, it.props);
        }
      } else {
        let t = gen.var("props", (0, __1)`${e}.evaluated.props`);
        it.props = mergeEvaluated.props(gen, t, it.props, Name);
      }
    }
    if (it.items !== true) {
      if (a && !a.dynamicItems) {
        if (a.items !== undefined) {
          it.items = mergeEvaluated.items(gen, a.items, it.items);
        }
      } else {
        let t = gen.var("items", (0, __1)`${e}.evaluated.items`);
        it.items = mergeEvaluated.items(gen, t, it.items, Name);
      }
    }
  }
  if ($async) {
    (() => {
      if (!schemaEnv.$async) {
        throw Error("async schema referenced by sync schema");
      }
      let r = gen.let("valid");
      gen.try(
        () => {
          gen.code((0, __1)`await ${callValidateCode(e, t, p)}`);
          m(t);
          if (!allErrors) {
            gen.assign(r, true);
          }
        },
        (e) => {
          gen.if((0, __1)`!(${e} instanceof ${it.ValidationError})`, () =>
            gen.throw(e),
          );
          h(e);
          if (!allErrors) {
            gen.assign(r, false);
          }
        },
      );
      e.ok(r);
    })();
  } else {
    e.result(
      callValidateCode(e, t, p),
      () => m(t),
      () => h(t),
    );
  }
}
export default {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    let t;
    let r;
    let s;
    let topSchemaRef;
    let l;
    let c;
    let { gen, schema, it } = e;
    let { baseId, schemaEnv, validateName, opts, self } = it;
    let { root } = schemaEnv;
    if ((schema === "#" || schema === "#/") && baseId === root.baseId) {
      if (schemaEnv === root) {
        return d(e, validateName, schemaEnv, schemaEnv.$async);
      }
      let t = gen.scopeValue("root", {
        ref: root,
      });
      return d(e, (0, __1)`${t}.validate`, root, root.$async);
    }
    let $ = resolveRef.call(self, root, baseId, schema);
    if ($ === undefined) {
      throw new a(it.opts.uriResolver, baseId, schema);
    }
    if ($ instanceof SchemaEnv) {
      s = ((e, ref) => {
        let { gen } = e;
        if (ref.validate) {
          return gen.scopeValue("validate", {
            ref: ref.validate,
          });
        }
        return (0, __1)`${gen.scopeValue("wrapper", {
          ref,
        })}.validate`;
      })(e, (t = $));
      return void d(e, s, t, t.$async);
    }
    r = $;
    topSchemaRef = gen.scopeValue(
      "schema",
      opts.code.source === true
        ? {
            ref: r,
            code: stringify(r),
          }
        : {
            ref: r,
          },
    );
    l = gen.name("valid");
    c = e.subschema(
      {
        schema: r,
        dataTypes: [],
        schemaPath: nil,
        topSchemaRef,
        errSchemaPath: schema,
      },
      l,
    );
    return void (e.mergeEvaluated(c), e.ok(l));
  },
};
