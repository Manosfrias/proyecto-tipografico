Starting with GIT

===========================

comandos git rm > remove from disk & up Dont remove folders with archives
-r > remove all 
-f > force
-rf > remove all && force

--cached > mantain in disk

commit -am "comment" > for commit and add a message

===========================

Becareful with the archives that you add into git. You always come to an early version to review it so, if you add "node_modules" or folders as big as that, a complitely remove are quite dificult.

Commits > contenido actual del repositorio

un fichero > un hash
un directorio > el hash de los hash de los ficheros 
commit > hash del directorio + mensaje + hash commit anterior (hash root)

fetch & pull
push > replica en romoto lo que tienes en local
puedes forzarlo con push --force 
fetch > operación contraria de push : replica en una rama especial, un remoto.

pull > fetch + merge

reset --hard > hace un 301. Mueve a donde apunta la rama

Commits sueltos (loose) o basura.

git gc > recolector e basura
--prune > se carga todos los huerfanos anteriores a una fecha dada (p.e. now)

===========================

los scripts de package se ejecutan con npm run.