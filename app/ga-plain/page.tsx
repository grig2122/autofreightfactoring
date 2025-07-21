import { GATestPlain } from '../ga-test-plain'

export default function GAPlainTestPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">GA Plain Script Test</h1>
        <p className="mb-4">Testing Google Analytics with a plain script tag approach.</p>
        <p className="text-sm text-gray-600">Check the browser console for detailed logs.</p>
        <GATestPlain />
      </div>
    </div>
  )
}