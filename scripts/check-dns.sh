#!/bin/bash

echo "Checking DNS propagation for autofreightfactoring.com..."
echo "Expected IP: 76.76.21.21"
echo ""

echo "Root domain (@):"
dig A autofreightfactoring.com +short

echo -e "\nWWW subdomain:"
dig A www.autofreightfactoring.com +short

echo -e "\nVercel domain status:"
vercel domains inspect autofreightfactoring.com | grep -E "(Configuration|properly|✓|✘)"

echo -e "\nHTTPS check:"
curl -I -s https://autofreightfactoring.com | head -1 || echo "Not responding yet"