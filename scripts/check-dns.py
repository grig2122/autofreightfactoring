#!/usr/bin/env python3
import socket
import subprocess
import sys

def check_dns(domain):
    print(f"Checking DNS for {domain}...")
    print("=" * 50)
    
    # Check A records
    try:
        ips = socket.gethostbyname_ex(domain)[2]
        print(f"✓ A records found: {', '.join(ips)}")
        
        # Check if pointing to Vercel
        vercel_ip = "76.76.21.21"
        if vercel_ip in ips:
            print(f"✓ Domain is pointing to Vercel IP ({vercel_ip})")
        else:
            print(f"✗ Domain is NOT pointing to Vercel IP. Current IPs: {ips}")
            print(f"  Expected: {vercel_ip}")
    except socket.gaierror as e:
        print(f"✗ DNS lookup failed: {e}")
    
    print("\n" + "=" * 50)
    
    # Check with dig if available
    try:
        result = subprocess.run(['dig', '+short', domain], capture_output=True, text=True)
        if result.returncode == 0 and result.stdout:
            print(f"dig results:\n{result.stdout}")
    except FileNotFoundError:
        pass
    
    # Check with nslookup
    try:
        result = subprocess.run(['nslookup', domain], capture_output=True, text=True)
        if result.returncode == 0:
            print(f"\nnslookup results:\n{result.stdout}")
    except FileNotFoundError:
        pass

if __name__ == "__main__":
    domains = ["autofreightfactoring.com", "www.autofreightfactoring.com"]
    for domain in domains:
        check_dns(domain)
        print("\n")