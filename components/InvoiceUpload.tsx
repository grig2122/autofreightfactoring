'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Upload, FileText, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface QuoteData {
  invoiceAmount: number
  advanceAmount: number
  advancePercentage: number
  factoringFee: number
  feePercentage: number
  estimatedFundingTime: string
}

export function InvoiceUpload() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [quote, setQuote] = useState<QuoteData | null>(null)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFile = (selectedFile: File) => {
    setError(null)
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Please upload a PDF or image file (JPG, PNG)')
      return
    }

    // Validate file size (10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB')
      return
    }

    setFile(selectedFile)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const uploadInvoice = async () => {
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/invoice/upload', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      setQuote(data.quote)
      setSessionId(data.sessionId)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const proceedToApplication = () => {
    if (sessionId) {
      // Pass session ID to application flow
      router.push(`/apply?session=${sessionId}`)
    }
  }

  if (quote) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <CheckCircle2 className="h-6 w-6" />
            <span className="font-semibold">Invoice Analyzed Successfully!</span>
          </div>
          <CardTitle>Your Instant Quote</CardTitle>
          <CardDescription>
            Based on your invoice, here's what we can offer
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Invoice Amount</p>
                <p className="text-2xl font-bold">${quote.invoiceAmount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Advance Amount</p>
                <p className="text-2xl font-bold text-green-600">
                  ${quote.advanceAmount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">{quote.advancePercentage}% advance</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Factoring Fee</span>
              <span className="font-medium">
                ${quote.factoringFee.toLocaleString()} ({quote.feePercentage}%)
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Funding Time</span>
              <span className="font-medium text-green-600">{quote.estimatedFundingTime}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={proceedToApplication}
              className="flex-1"
              size="lg"
            >
              Get This Cash Advance
            </Button>
            <Button 
              onClick={() => {
                setQuote(null)
                setFile(null)
                setSessionId(null)
              }}
              variant="outline"
              size="lg"
            >
              Upload Another Invoice
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            No commitment required • No credit check • Get funded in 24 hours
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Get an Instant Quote</CardTitle>
        <CardDescription>
          Upload your invoice and see how much cash you can get today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`
            relative border-2 border-dashed rounded-lg p-8 text-center
            transition-colors duration-200 cursor-pointer
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
            ${file ? 'bg-green-50 border-green-300' : ''}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileInput}
          />

          {file ? (
            <div className="space-y-2">
              <FileText className="h-12 w-12 text-green-600 mx-auto" />
              <p className="font-medium text-green-800">{file.name}</p>
              <p className="text-sm text-gray-600">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  setFile(null)
                  setError(null)
                }}
                variant="outline"
                size="sm"
              >
                Remove File
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-12 w-12 text-gray-400 mx-auto" />
              <div>
                <p className="font-medium text-gray-700">
                  Drop your invoice here or click to browse
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  PDF, JPG, or PNG • Max 10MB
                </p>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {file && (
          <Button
            onClick={uploadInvoice}
            disabled={uploading}
            className="w-full mt-6"
            size="lg"
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Invoice...
              </>
            ) : (
              'Get Instant Quote'
            )}
          </Button>
        )}

        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            No credit check required
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            Get up to 90% of invoice value
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            Funds available in 24 hours
          </p>
        </div>
      </CardContent>
    </Card>
  )
}