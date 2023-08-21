# superVinylDucky
landing website

## Branch structure
- main -> the branch that will be reflected as MVP
- Sprint-[x] -> branch that collects all sprint
- ECBGI-[x] -> feature that we are working on

## Project structure

#### Base Routs
**LandingPage**
/{lang}/ and /
Root of the website


**CV**
/{lang}/radu_dragan/

**Products**
/{lang}/stickers/{name}/

**Category of Products**
/{lang}/stickers_category/{name}/

#### Tools

Accepted Structure
| Structure |  Description|
| ---       | --- |
| id        | the database id of the tool |
| category  | the category of tool in the database |

**category of Tools**
/tools/{structure:category}/{id}/

**id of Tools**
/tools/{structure:id}/{id}/

**tag of Tools**
/tools/{structure:tag}/{id}/


**debug**
/siteMap/

#### Store Structure
Namespaced Store in vuex

### Stack
VueJS 3