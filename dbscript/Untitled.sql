select * from cas.policy_detail;

CREATE OR REPLACE VIEW policy_detail AS
SELECT 
p.id       as policy_id,
p.name     as policy_name,
pt.name    as policy_type,
p.state    as policy_state,
p.severity as severity,
r.id       as rule_id,
r.name     as rule_name,
c.id       as customer_id,
c.name     as customer_name,
c.security_provider_id,
rc.description as rule_condition,
f.name     as field_name,
o.name     as operator,
rc.value1  as value1,
rc.value2  as value2
from rule r, policy p, policy_type pt, field f, operator o, rule_condition rc, customer c , security_provider sp
where r.policy_id    = p.id
and p.policy_type_id = pt.id
and p.customer_id    = c.id
and c.security_provider_id   = sp.id
and r.id             = rc.rule_id
and rc.field_id      = f.id
and rc.operator_id   = o.id;


SELECT policy_id, rule_id, policy_name, policy_type, policy_state, severity, rule_name, customer_name, rule_condition, field_name, operator, value1, value2 from policy_detail order by policy_id, rule_id;

select * from cas.user;