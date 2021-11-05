# Backups

Altertek data and critical configuration is automatically saved every night using [Restic](https://restic.net/).  
We keep the last seven successful incremental backups, older backups are cleaned regularly.  
Backups are encrypted before being stored on an Object Storage endpoint stored in Paris by Scaleway.  
