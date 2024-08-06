# resetservice.sh
#!/bin/bash
pm2 stop soupbot
pm2 delete soupbot
pm2 save
rm -rf ~/apps/soupbot
mkdir ~/apps/soupbot
cp -r ~/actions-runner/_work/soup-bot/soup-bot/* ~/apps/soupbot
cp -r ~/soupbot-env/.env ~/apps/soupbot
cd ~/apps/soupbot
pm2 start index.js --name soupbot
pm2 save