if (require.j == "wl4") var a = require("./module-hk7.js");
if (require.j == "wl4") var o = require("./module-Xb2.js");
if (require.j == "wl4") var i = require("./module-LW.js");
export class L {
  computeTeamPermission(e) {
    let t;
    let { team } = e;
    let currentRole = team == null ? undefined : team.currentRole;
    let isOwner = currentRole === a.a.OWNER;
    let isAdmin = currentRole === a.a.ADMIN;
    let isCollaborator = currentRole === a.a.COLLABORATOR;
    let isRemoved = !team;
    let isExpired = i.Jw(e);
    let isSeatFull = i.CG(team);
    let p = !!(team && (isOwner || isAdmin)) && !isExpired;
    let C = !!(team && isOwner && !isExpired);
    let canInvite = p && !isSeatFull;
    t = isRemoved
      ? {
          manageSpace: o.V.REMOVED,
          viewMembers: o.V.REMOVED,
          invite: o.V.REMOVED,
          audit: o.V.REMOVED,
          updateRole: o.V.REMOVED,
          removeMember: o.V.REMOVED,
          renew: o.V.REMOVED,
          viewOrder: o.V.REMOVED,
          addSeat: o.V.REMOVED,
          allocateCredit: o.V.REMOVED,
        }
      : i.um(p, C, isExpired, isSeatFull);
    return {
      currentRole,
      isOwner,
      isAdmin,
      isCollaborator,
      isRemoved,
      isExpired,
      isSeatFull,
      canManageSpace: p,
      canViewMembers: !!team,
      canInvite,
      canAudit: p,
      canUpdateRole: C,
      canRemoveMember: p,
      canManageMembers: p,
      canRenew: C,
      canViewOrder: p,
      canAddSeat: C,
      canAllocateCredit: p,
      disabledReasons: t,
    };
  }
  computeMemberPermission(e) {
    let t;
    let r;
    let i = this.computeTeamPermission(e);
    let n = e.member.role === a.a.OWNER;
    let c = e.member.role === a.a.ADMIN;
    let l = !!(
      e.currentUserId &&
      e.currentUserId === e.member.userId &&
      e.nextRole &&
      e.nextRole !== e.member.role &&
      e.nextRole !== a.a.OWNER &&
      e.nextRole !== a.a.ADMIN
    );
    let canUpdateRole = i.canUpdateRole && !n && !l;
    let s = i.isAdmin && c;
    let canRemove = i.canRemoveMember && !n && !s;
    let u = {};
    if (!i.canUpdateRole) {
      u.updateRole =
        (t = i.disabledReasons.updateRole) != null ? t : o.V.NO_PERMISSION;
    }
    if (!i.canRemoveMember) {
      u.removeMember =
        (r = i.disabledReasons.removeMember) != null ? r : o.V.NO_PERMISSION;
    }
    if (n) {
      u.updateRole = o.V.OWNER_PROTECTED;
      u.removeMember = o.V.OWNER_PROTECTED;
    }
    if (s) {
      u.removeMember = o.V.NO_PERMISSION;
    }
    if (l) {
      u.updateRole = o.V.SELF_OPERATION;
    }
    return {
      canUpdateRole,
      canRemove,
      disabledReasons: u,
    };
  }
}
